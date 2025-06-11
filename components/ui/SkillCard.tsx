import { IconType } from 'react-icons';

interface SkillCardProps {
    icon: IconType;
    label: string;
}

const SkillCard = ({ icon: Icon, label }: SkillCardProps) => {
    return (
        <div className="flex items-center gap-2">
            <Icon size={24} />
            <span>{label}</span>
        </div>
    );
};

export default SkillCard;

