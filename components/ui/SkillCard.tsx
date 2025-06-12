import { IconType } from 'react-icons';

interface SkillCardProps {
    icon: IconType;
    label: string;
}

const SkillCard = ({ icon: Icon, label }: SkillCardProps) => {
    return (
        <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-[#2a2a2a]">
            <Icon className="text-[16px] md:text-[20px] lg:text-[24px]" color="#FF6B6B" />
            <span className="text-[#F5F5F5] text-xs md:text-sm">{label}</span>
        </div>
    );
};


export default SkillCard;

