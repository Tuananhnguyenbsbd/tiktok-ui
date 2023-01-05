import classNames from 'classnames/bind';
import styles from './wapper.module.scss';
const cx = classNames.bind(styles);
function Wapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wapper;