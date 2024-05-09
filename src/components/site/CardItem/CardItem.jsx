import React from 'react'

function CardItem({item}) {
  return (
    <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" height="300px" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.price}AZN</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default CardItem