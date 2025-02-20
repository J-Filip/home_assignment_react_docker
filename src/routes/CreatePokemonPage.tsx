import { Button, Col, Form, Input, InputNumber, Row, Typography } from 'antd';
import { PokemonDetails } from './PokemonListPage';
import { useNavigate } from 'react-router-dom';

interface CreatePokemonPageProps {
  setResponse: React.Dispatch<React.SetStateAction<PokemonDetails>>;
}

export const CreatePokemonPage = (props: CreatePokemonPageProps) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values: PokemonDetails) => {
    /**
      * in a real app, we would send post request, and on success navigate to crated pokemon.

    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      const responseData: Pokemon = await response.json();
      navigate(`/pokemon/${responseData.name}/details`);
    } catch (error) {
      console.log(error);
    }
 */
    props.setResponse(values);
    navigate('success');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form<PokemonDetails> form={form} name={'user'} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Typography.Title level={2}>Create a new Pokemon:</Typography.Title>
        <Row>
          <Col>
            <Form.Item name={'name'} label={'Name:'} rules={[{ required: true, message: 'Please enter a name!' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name={'weight'} label={'Weight:'} rules={[{ required: true, message: 'Please enter the weight!' }]}>
              <InputNumber min={1} max={10000} addonAfter="kg" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item name={'height'} label={'Height:'} rules={[{ required: true, message: 'Please enter the hright!' }]}>
              <InputNumber min={1} max={10000} addonAfter="ft" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
