function Lista ({ lista }) {
  return (
    <div className="lista">
      {lista.map((item, index) => (
        <div key={index} className="item">
          {item}
        </div>
      ))}
    </div>
  );
}

export default Lista;