import ItemCount from "./ItemCount";
import { Card,  CardBody } from "@nextui-org/react";
import { LoggedContext } from '../context/LoggedContext.jsx';
import CarrouselContainer from "./CarrouselContainer.jsx";
import Price from "./Price.jsx";

import { React, useContext } from 'react'

function ItemDetail({ _id, title, description, price, stock, thumbnail }) {

  const { isLogged, userInfo, token } = useContext(LoggedContext)
  const onAdd = async (contador) => {
    const itemToAdd = {
      quantity: contador
    }

    const cart = userInfo.user.cart

    try {
      await fetch(`https://kamshop.onrender.com/api/carts/${cart}/products/${_id}`, {
        method: 'POST',
        headers: {
          'Authorization': `${token}`,
          'Content-type': 'application/json'
        },
        body: JSON.stringify(itemToAdd)
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Card className="self-center w-[90vw] h-full md:min-h-[80vh] md:max-h-[80vh]">
      <CardBody className=' text-center grid md:grid-cols-2 p-8 gap-8'>
        <div className=" flex place-items-center">
          <CarrouselContainer imgs={thumbnail}/>
        </div>
        <div className="flex flex-col gap-4 justify-between text-balance">
          <h2 className='text-3xl font-bold text-balance underline'>{title}</h2>
          <p className="text-lg font-semibold self-center text-balance max-w-[50ch]">{description}</p>
          <h3 className="text-5xl font-semibold" >$<Price amount={price}/></h3>
          {isLogged ? <ItemCount stock={stock} onAdd={onAdd} /> : <b className="text-2xl underline font-semibold">¡Inicia sesión para comprar!</b>}
        </div>
      </CardBody>
    </Card>
  )
}

export default ItemDetail