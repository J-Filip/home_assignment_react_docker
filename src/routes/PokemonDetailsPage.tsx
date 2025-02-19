import { Button, Card, Col, Image, Popconfirm, Row } from 'antd';

import 'antd/es/popconfirm/style/index.css';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { PokemonDetails } from './PokemonListPage';

export const PokemonDetailsPage = () => {
  const { pokemonName } = useParams<{ pokemonName: string }>();
  const { data, isLoading, error } = useFetch<PokemonDetails>(`pokemon/${pokemonName}`);
  const navigate = useNavigate();

  const handleDelete = async () => {
    // try {
    //   const response = await fetch(`https://pokeapi.co/api/v2/${pokemonName}`, {
    //     method: 'DELETE',
    //   });
    //   if (!response.ok) {
    //     throw new Error(`HTTP error: Status ${response.status}`);
    //   }
    //   // show confirmation message navigate to /pokemons
    // } catch (error) {
    //   console.log(error);
    // }

    navigate('/pokemons');
  };

  return (
    <div>
      {isLoading && <div>loading</div>}
      {error && <div>Error: {error}</div>}

      {data && (
        <Card>
          <Row align={'middle'} justify={'space-around'} gutter={8}>
            <Col span={8}>
              <h2>{data?.name.toUpperCase()}</h2>
              <Image src={data?.sprites.front_default}></Image>
            </Col>
            <Col>
              <h4>Weight:</h4>
              <p>{data.weight} kg</p>
              <h4>Height: </h4>
              <p>{data.height} feet</p>
            </Col>
            <Col>
              <h4>Types:</h4>
              {data.types.map((type) => (
                <p>{type.type.name}</p>
              ))}
            </Col>
            <Col>
              <Popconfirm title={'Are you sure?'} onConfirm={handleDelete} okText="Yes" cancelText="No">
                <Button type="primary" danger>
                  🗑️ Delete
                </Button>
              </Popconfirm>
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
};
