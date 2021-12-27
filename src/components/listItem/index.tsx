import * as S from './styles'
import { Item } from '../../types/item'
import { useState } from 'react'

type Props = {
    item: Item;
}

const ListItem = ({item}: Props) => {
    const [isChecked, setIsCheked] = useState(item.done);

    return (
        <S.Container done={isChecked}>
            <input 
            type="checkbox" 
            checked={isChecked}
            onChange={e => setIsCheked(e.target.checked)}
            />
            <label>{item.name}</label>
        </S.Container>
    )
}

export default ListItem;