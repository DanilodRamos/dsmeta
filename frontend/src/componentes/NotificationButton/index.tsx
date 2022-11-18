import icon from '../../assets/img/notification-icon.svg';
import './styles.css';
import axios from 'axios';

type Props ={
    saleId: number;

}
function handClick(id : number){
    axios('${BASE_URL}/sales/${id}/notification')
    .then(response => {
        toast.info("SMS enviado com sucesso ");
    })
}
function Notificationbutton({saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handClick(saleId)}>
            <img src={icon} alt="Notificar" />
            </div>
)
}
export default Notificationbutton;

