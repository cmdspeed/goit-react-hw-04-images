import { MagnifyingGlass } from 'react-loader-spinner';
import CSS from './Loader.module.css';
export default function Loader() {
  return (
    <div className={CSS.loader}>
      <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
}
