import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import { PopupLayout } from 'shared/ui/popup-layout';
import { buyTicketSlice } from '../model';
import { BottomBar } from './bottomBar';
import { FirstStep } from './first-step';
import { SecondStep } from './second-step';
import styles from './styles.module.scss';

const BuyTicket = () => {
  const { isPopup } = useAppSelector((state) => state.buyTicketReducer);
  const { toggle } = buyTicketSlice.actions;
  const dispatch = useAppDispatch();

  const [currentStep, setCurrentStep] = useState(0);

  const restartStepCounter = () => setCurrentStep(0);
  const openPopup = () => dispatch(toggle());
  const openPopupOnFirstStep = () => {
    restartStepCounter();
    openPopup();
  };

  return (
    <div className={styles.container}>
      <BottomBar open={openPopupOnFirstStep} />
      {isPopup && (
        <PopupLayout
          close={() => dispatch(toggle())}
          classForContainer={styles.popupContainer}
        >
          <div style={{ height: '100%' }}>
            {currentStep === 0 && <FirstStep onClick={setCurrentStep} />}
            {currentStep === 1 && <SecondStep />}
          </div>
        </PopupLayout>
      )}
    </div>
  );
};

export { BuyTicket };
