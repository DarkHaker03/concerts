import clsx from 'clsx';
import { useState } from 'react';
import { icons } from 'shared/ui/icons';
import styles from './styles.module.scss';

const isOneTicket = false;

const SecondStep = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        overflowY: 'scroll',
      }}
    >
      <div>
        <div className={styles.name}>Подтверждение заказа</div>
        <div
          style={{
            display: 'flex',
            marginTop: '30px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: '22px',
            }}
          >
            Ноггано
          </div>
          <div>18+</div>
        </div>
        <div>Сб, 17 декабря, 20:00</div>
        <div>Москва, Барвиха Luxury Village</div>
        {isOneTicket ? (
          <div className={styles.ticket}>
            <div>1 ряд, 4 место</div>
            <div className={styles.place}>Стол 69</div>
          </div>
        ) : (
          <div className={styles.ticketsContainer}>
            <button
              onClick={toggle}
              type="button"
              className={styles.ticketsContainer__button}
            >
              <div>2 билета</div>
              <icons.VerticalPoints />
            </button>
            {isOpen && (
              <>
                <div className={styles.ticket}>
                  <div>1 ряд, 4 место</div>
                  <div className={styles.place}>Стол 69</div>
                </div>
                <div className={styles.ticket}>
                  <div>1 ряд, 4 место</div>
                  <div className={styles.place}>Стол 69</div>
                </div>
              </>
            )}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgb(133, 133, 133)',
          }}
        >
          <div>Цена билета</div> <div>10000 Р</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgb(133, 133, 133)',
            marginBottom: '10px',
          }}
        >
          <div>Комиссия</div> <div>+2500 Р</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 500,
          }}
        >
          <div> Итоговая стоимость</div> <div>12500 Р</div>
        </div>
        <div style={{ display: 'flex', margin: '15px 0' }}>
          <div
            className={clsx(styles.paymentMethod, styles.selectedPaymentMethod)}
          >
            <icons.PaymentCard />
            <div>Credit Card</div>
          </div>
          <div className={styles.paymentMethod}>
            <icons.PaymentCard />
            <div>Credit Card</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <icons.Percent />
          <span>Ввести промокод</span>
        </div>
        <input className={styles.input} type="text" />
      </div>
      <button type="button" className={styles.button}>
        <div>Оплатить</div>
        <div>41 800 Р</div>
      </button>
    </div>
  );
};
export { SecondStep };
