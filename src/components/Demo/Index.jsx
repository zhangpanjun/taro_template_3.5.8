import styles from './Index.module.scss';

const demo = ({ info }) => {
    console.log('接收到的参数', info);
    return <div className={styles.demo}>自定义组件{info}</div>;
};
export default demo;
