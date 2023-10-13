import Image from "next/image"

const List = () => {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {상품.map((product,i) => {
        return (
          <div className='food'>
            <img src={`/food${i}.jpg`} alt="tomato" className="food-img"  />
            <h4>{product} $40</h4>
          </div>
        )
      })} 
    </div>
  )
}

export default List