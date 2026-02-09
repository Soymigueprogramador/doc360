import styles from './HomeUsusariosSinHistoriaClinica.module.scss';
import { SideBar } from '../../components/Sidebar/Sidebar.jsx';

const HomeUsusariosSinHistoriaClinica = () => {
  return (
    <div className={styles.container}>

      <SideBar
        className={styles.menu} menu={[
          { label: 'Inicio', to: '/' },
          { label: 'Mi Perfil', to: '/perfil' },
          { label: 'Calendario', to: '/calendario' },
          { label: 'Comentarios', to: '/comentarios' },
        ]}
        actions={[
          {
            label: 'Validar profesional',
            onClick: () => console.log('Se validó al profesional'),
          },
        ]}
      />
    </div>
  );
};

export default HomeUsusariosSinHistoriaClinica;
