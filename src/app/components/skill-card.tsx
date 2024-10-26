interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div className="bg-transparent shadow-none">
      <div className="grid justify-center text-center p-4">
        <div className="mx-auto mb-6 h-12 w-12 flex items-center justify-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h5 className="text-xl font-semibold text-blue-gray-800 mb-2">
          {title}
        </h5>
        <p className="px-8 text-gray-500 font-normal">
          {children}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
