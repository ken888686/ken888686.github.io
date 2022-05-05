export default function IconList(props) {
  const { list } = props;
  return (
    <div className="flex flex-wrap justify-center py-3">
      {list.map((item) => (
        <div key={item.id} className="px-5">
          <div className="h-full p-4 transition-all rounded-lg shadow-lg hover:scale-110 bg-secondary hover:bg-primary hover:shadow-none group">
            <i className="w-6 h-6 mr-4 text-primary bi bi-patch-check-fill group-hover:text-secondary" />
            <span className="font-medium text-primary group-hover:text-secondary">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
