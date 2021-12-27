import { useState } from 'react';
import * as S from './App.styled';
import { Item } from './types/item';
import ListItem from './components/listItem';
import AddArea from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList); 
  }
 
  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>
        <AddArea onEnter={handleAddTask}/>
        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </S.Area>
    </S.Container>
  );
}

export default App;
