import { IconType } from 'react-icons';

interface SkillCardProps {
    icon: IconType;
    label: string;
}

const SkillCard = ({ icon: Icon, label }: SkillCardProps) => {
    return (
        <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-secondary-custom">
            <Icon className="text-[16px] md:text-[20px] lg:text-[24px] text-primary-custom" />
            <span className="text-primary-custom text-xs md:text-sm">{label}</span>
        </div>
    );
};


export default SkillCard;

