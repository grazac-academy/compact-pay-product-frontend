import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import style from './loading.module.css'

const Loading = () => {
  return (
    <span className={style.loader}>
        <AiOutlineLoading3Quarters />
    </span>
  )
}

export default Loading