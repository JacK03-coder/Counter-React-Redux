const Container = ({Children}) => {
  return (
    <div className="card" style={{width: "70%"}}>
      <div className="card-body">
        {Children}
        
      </div>
    </div>
  );
};

export default Container;
