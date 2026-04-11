export default function SectionHeader({ title }: { title: string }) {
    return (
        <div className="my-10">
            <h3 className="font-bold text-2xl uppercase">{title}</h3>
        </div>
    );
}
