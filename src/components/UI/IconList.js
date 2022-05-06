export default function IconList(props) {
  const { list } = props;
  return (
    <div className="flex flex-wrap justify-center py-3">
      {list.map((item) => (
        <div key={item.id} className="px-5">
          <div className="h-full p-4 transition-all rounded-lg shadow-lg hover:scale-110 bg-primary hover:bg-secondary hover:shadow-none group">
            <i className="w-6 h-6 mr-4 text-secondary bi bi-patch-check-fill group-hover:text-primary" />
            <span className="font-medium text-secondary group-hover:text-primary">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
