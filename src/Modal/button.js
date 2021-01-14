
import { Button} from 'reactstrap';





  class AuthButton extends React.Component {
  
  
    render() {

        if (this.props.props) {
            return (
                <Button color="danger" onClick={toggle} size="sm">Editar</Button>
              );
        }else{
            return (
                <Button color="danger" onClick={toggle} size="sm">Editar</Button>
              );
        }

 
    }
  }




  export default AuthButton;