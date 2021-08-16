const Results= (props) => {
  const {results} = props;
  const {fname,sname,percentage,result} = results//this is coming the api object that is why I needed the change key name according to that
  return(
    <div>
      Results:
      <div>{fname} & {sname}</div>
      <div>precatntage: {percentage}</div>
      <div>result: {result}</div>

    </div>
  )

}

export default Results