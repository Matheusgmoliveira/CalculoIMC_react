import { useState } from "react"
import styles from './Formulario.module.css'

const Formulario = () =>{
    let [peso, setPeso] = useState(0)
    let [altura, setAltura] = useState(0)

    const calculaImc = () =>{
        const calcula = (peso / (altura*altura)).toFixed(2)

        if (calcula < 16) {
            return (<p>O seu IMC é {calcula} e você está no estado  de magreza grave</p>);
        } else if (calcula >= 16 && calcula <= 16.9) {
            return (<p>O seu IMC é {calcula} e você está no estado de magreza moderada</p>);
        } else if (calcula >= 17 && calcula <= 18.5) {
            return (<p>O seu IMC é {calcula} e você  está no estado de magreza leve</p>);
        } else if (calcula >= 18.6 && calcula <= 24.9) {
            return (<p>O seu IMC é {calcula} e você  está no estado de peso ideal</p>);
        } else if (calcula >= 25 && calcula <= 29.9) {
            return (<p>O seu IMC é {calcula} e você  está no estado de sobrepeso</p>);
        } else if (calcula >= 30 && calcula <= 34.9) {
            return (<p>O seu IMC é {calcula} e você  está no estado de obesidade grau I, TOME CUIDADO</p>);
        } else if (calcula >= 35 && calcula <= 39.9) {
            return (<p>O seu IMC é {calcula} e você  está no estado de obesidade grau II ou severa, TOME CUIDADO</p>);
        } else if (calcula >= 40) {
            return (<p>O seu IMC é {calcula} e você está no estado de obesidade grau III ou mórbida, TOME MUITO CUIDADO</p>);
        }
        else{
            return(<p></p>)
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.formImc}>
                <form action="">
                    <h1>Calcule o IMC</h1>
                    <input className={styles.peso} type="number" placeholder="Digite o seu peso" onChange={evento=> setPeso(parseFloat(evento.target.value))}/>
                    <input className={styles.altura} type="number" placeholder="Digite a sua altura" onChange={evento=> setAltura(parseFloat(evento.target.value))}/>
                    {calculaImc()}
                </form>
            </div>
            
        </div>
        
    )
}

export default Formulario