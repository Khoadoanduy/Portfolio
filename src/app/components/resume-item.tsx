interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-gray-500 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
      </div>
      <p className="w-full text-gray-500 font-normal">
        {children}
      </p>
    </div>
  );
}

export default ResumeItem;
