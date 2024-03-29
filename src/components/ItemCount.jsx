import React from "react"
import { useState } from "react"
import { Button, Card } from "@nextui-org/react";
import { Link } from "react-router-dom";


const ItemCount = ({ stock = 10, onAdd }) => {

    const [contador, setContador] = useState(1)
    const [clicked, setClicked] = useState(false)

    const sum = () => {
        if (contador === stock) {
            return
        }
        setContador(contador + 1)
    }

    const res = () => {
        if (contador === 1) {
            return
        }
        setContador(contador - 1)
    }

    const add = () => {
        if (stock > 0) {
            setClicked(true)
            onAdd(contador)
        }

    }

    return (
        <>
            {stock > 0
                ? <div className="flex w-full">
                    {clicked ? <Card className="flex w-full items-center p-2 "> <Button color="primary" className="font-semibold text-lg" as={Link} to={"/cart"}> Cart </Button></Card> : (
                        <div className="w-full mx-2">
                            <Card className="flex flex-row justify-between items-center p-2 ">
                                <div className="flex flex-row gap-4">
                                    <Button variant="bordered" isIconOnly size="sm" color={contador > 1 ? 'primary' : 'danger'} onClick={() => res()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg></Button>
                                    <h4 className="font-semibold text-xl">{contador}</h4>
                                    <Button variant="bordered" isIconOnly size="sm" color={contador === stock ? 'danger' : 'primary'} onClick={() => sum()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></Button>
                                </div>
                                <div>
                                    <Button color="primary" className="font-semibold text-lg" onClick={() => add()}>Add to cart</Button>
                                </div>
                            </Card>
                        </div>)}
                </div>
                : <h3 className="text-red-600 text-2xl font-semibold">NO HAY STOCK</h3>
            }
        </>
    )
}

export default ItemCount 
