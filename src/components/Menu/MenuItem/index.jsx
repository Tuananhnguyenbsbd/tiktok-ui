import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from '../MenuWapper/menuWapper.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <div className={cx('Item')}>
            <Button to={data.to} leftIcon={data.icon} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
