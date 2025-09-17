import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import { useRef, useState } from "react";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: {
        title: string;
        icon: React.ReactNode;
        href?: string;
        onClick?: () => void;
    }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: {
        title: string;
        icon: React.ReactNode;
        href?: string;
        onClick?: () => void;
    }[];
    className?: string;
}) => {
    let touchX = useMotionValue(Infinity);

    return (
        <motion.div
            onTouchMove={(e) => {
                const touch = e.touches[0];
                if (touch) {
                    touchX.set(touch.pageX);
                }
            }}
            onTouchEnd={() => touchX.set(Infinity)}
            className={cn(
                "mx-auto h-16 items-end gap-4 rounded-2xl bg-secondary-custom px-4 pb-3 md:hidden border border-secondary-custom flex",
                className,
            )}
            style={{ boxShadow: 'var(--shadow-3d-border)' }}
        >
            {items.map((item) => (
                <IconContainer
                    mouseX={touchX}
                    key={item.title}
                    {...item}
                />
            ))}
        </motion.div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: {
        title: string;
        icon: React.ReactNode;
        href?: string;
        onClick?: () => void;
    }[];
    className?: string;
}) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-secondary-custom px-4 pb-3 md:flex border border-secondary-custom",
                className,
            )}
            style={{ boxShadow: 'var(--shadow-3d-border)' }}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
    onClick,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href?: string;
    onClick?: () => void;
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // Reduced scaling effect - from 40->80->40 to 40->55->40
    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 55, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 55, 40]);

    // Reduced icon scaling - from 20->40->20 to 20->28->20
    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 28, 20]);
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 28, 20],
    );

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    const WrapperComponent = href ? 'a' : 'button';
    const wrapperProps = href ? { href } : { onClick };

    return (
        <WrapperComponent {...wrapperProps} className="relative">
            <motion.div
                ref={ref}
                style={{
                    width,
                    height,
                    boxShadow: 'var(--shadow-neomorph-sm)'
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onTouchStart={() => setHovered(true)}
                onTouchEnd={() => setHovered(false)}
                className="relative flex aspect-square items-center justify-center rounded-full bg-primary-custom border border-secondary-custom"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="absolute -top-8 left-1/2 w-fit rounded-md bg-secondary-custom border border-secondary-custom px-2 py-0.5 text-xs whitespace-pre text-primary-custom"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center text-secondary-custom"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </WrapperComponent>
    );
}