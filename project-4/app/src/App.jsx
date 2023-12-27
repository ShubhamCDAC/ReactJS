
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //for search box puropse
  const [filteredData, setFilteredData] = useState(null);

  // for different buttons
  const [selectedBtn, setSelectedBtn] = useState('all');

  // the function inside useEffect triggeres useEffect() function before anything renders on UI
  // this helps during data fetching from another server in networks
  // this has 1 callback function and array
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json(); // for converting data in boolean

        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);   // empty array for single run

  const searchFood = (e) => {
    const searchValue = e.target.value;  // target.value => this is defines valie which is from browser when we enter

    console.log(searchValue);

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  }

  const filterFood = (type) => {
    if (type === 'all') {
      setFilteredData(data);
      setSelectedBtn('all');
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: 'All',
      type: 'all'
    },
    {
      name: 'Breakfast',
      type: 'breakfast'
    },
    {
      name: 'Lunch',
      type: 'lunch'
    },
    {
      name: 'Dinner',
      type: 'dinner'
    },
  ]

  if (error) return <div> {error} </div>;
  if (loading) return <div> Loading... </div>;

  return (
    <>
      <Container>

        <TopContainer>
          <div className='logo'>
            <img src='/logo.png' alt='logo' />
          </div>
          <div className='search'>
            <input onChange={searchFood} placeholder='Search Food' />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button 
                isSelected = {selectedBtn === value.type}
                key={value.name} onClick={() => filterFood(value.type)}>
              {value.name}
            </Button>
          ))}
          {/* <Button onClick={() => filterFood('all')}>All</Button>
          <Button onClick={() => filterFood('breakfast')}>BreakFast</Button>
          <Button onClick={() => filterFood('lunch')}>Lunch</Button>
          <Button onClick={() => filterFood('dinner')}>Dinner</Button> */}
        </FilterContainer>

      </Container>

      <SearchResults data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;

`;

const TopContainer = styled.section`
    height: 140px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;

    .search{
      input{
        background-color: transparent;
        border: 1px solid #ff0909;
        color: #fff; 
        border-radius: 5px;
        height: 40px;
        width: 285px;
        font-size: 16px;
        padding: 0 10px;

        &::placeholder{
          color: #fff;
        }
      }
    }

    @media (0 < width < 600px){
      flex-direction: column;
      height: 130px;
    }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color:${({isSelected}) => (isSelected ? '#8d0d0d' : '#ff4343')};
  border-radius: 5px;
  border: none;
  padding: 6px 12px;
  color:#fff;
  cursor: pointer;

  &:hover{
    background-color: #8d0d0d;
  }
`;

