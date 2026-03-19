import { useState } from "react";

export default function useBuscador() {
    const [cep, setCep] = useState("")
    const [address, setAddress] = useState(null)

    async function buscarCep() {
        const limparChar = cep.replace(/\D/g, "")
        if (limparChar.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                const data = await response.json()
                if (data.erro) {
                    alert('CEP não encontrado!')
                    setAddress(null)
                } else {
                    setAddress(data)
                    console.log(data)
                }
            } catch (error) {
                console.log('Bucador de CEP: ', error)
            }
        }
    }
    return {cep, setCep, address, buscarCep}
}