export default function IconList(props) {
  const { list } = props;
  return (
    <div className="flex flex-wrap justify-center py-3">
      {list.map((item) => (
        <div key={item.id} className="px-5">
          <div className="h-full p-4 rounded-lg bg-secondary">
            <i className="w-6 h-6 mr-4 text-primary bi bi-patch-check-fill" />
            <span className="font-medium text-primary">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
