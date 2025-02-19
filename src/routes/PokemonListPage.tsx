import { Button, Col, Row, Skeleton, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFetchPokemonDetails from '../hooks/useFetchPokemonDetails';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  weight: number;
  height: number;
}

export interface PokemonListPayload {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

const PokemonListPage = () => {
  const { detailsList, isLoading, error } = useFetchPokemonDetails('pokemon?limit=2');
  const [displayedPokemons, setDisplayedPokemons] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    setDisplayedPokemons(detailsList && detailsList?.length > 0 ? detailsList : []);
  }, [detailsList]);

  const handleDelete = async (pokemonName: string) => {
    // Mock delete
    const updatedPokemons = displayedPokemons.filter((pokemon) => pokemon.name !== pokemonName);
    setDisplayedPokemons(updatedPokemons);
    console.log(`Simulate delete of ${pokemonName}`);

    // see PokemonDetailsPage for example in a real app
  };

  const columns: ColumnsType<PokemonDetails> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <NavLink to={`/pokemon/${name}/details`}>{name.toUpperCase()}</NavLink>,
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button danger onClick={() => handleDelete(record.name)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Typography.Title level={2}>Pokedex</Typography.Title>

      <Row style={{ padding: '24px 0' }}>
        <Col>
          <Button type="primary">
            <Link to={'/pokemons/create'}> Create new</Link>
          </Button>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          {/* show data */}
          {displayedPokemons && displayedPokemons.length > 0 ? <Table columns={columns} dataSource={displayedPokemons} /> : isLoading ? <Skeleton /> : <h2>No pokemons in the pokedex.</h2>}
        </Col>
      </Row>

      {error && <p>Ooops...{error}. Please contact...</p>}
    </>
  );
};

export default PokemonListPage;
