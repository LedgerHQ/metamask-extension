import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '../../../components/ui/box';
import Button from '../../../components/ui/button';
import Typography from '../../../components/ui/typography';
import ToggleButton from '../../../components/ui/toggle-button';
import {
  FONT_WEIGHT,
  JUSTIFY_CONTENT,
  TYPOGRAPHY,
} from '../../../helpers/constants/design-system';
import { useI18nContext } from '../../../hooks/useI18nContext';

export default function PrivacySettings() {
  const t = useI18nContext();

  const [showIncomingTransactions, setShowIncomingTransactions] = useState(
    true,
  );
  const [usePhishingDetection, setUsePhishingDetection] = useState(true);
  const [useTokenDetection, setUseTokenDetection] = useState(true);

  const renderSetting = ({ value, setValue, title, description }) => {
    return (
      <Box justifyContent={JUSTIFY_CONTENT.CENTER} margin={3}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'left',
            maxWidth: '480px',
          }}
        >
          <Typography variant={TYPOGRAPHY.h5} fontWeight={FONT_WEIGHT.BOLD}>
            {title}
          </Typography>
          <Typography variant={TYPOGRAPHY.h5}>{description}</Typography>
        </div>
        <div className="privacy-settings__settings__toggle">
          <ToggleButton value={value} onToggle={(value) => setValue(!value)} />
        </div>
      </Box>
    );
  };
  return (
    <>
      {/* <Box margin={4} justifyContent={JUSTIFY_CONTENT.CENTER}> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: '24px',
          textAlign: 'center',
          maxWidth: '460px',
        }}
        className="privacy-settings"
      >
        <Typography variant={TYPOGRAPHY.H2} fontWeight={FONT_WEIGHT.BOLD}>
          {t('setAdvancedPrivacySettings')}
        </Typography>
        <Typography variant={TYPOGRAPHY.H4}>
          {t('setAdvancedPrivacySettingsDetails')}
        </Typography>
      </div>
      {/* </Box> */}
      <div className="privacy-settings__settings">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            maxWidth: '620px',
          }}
        >
          {renderSetting({
            value: showIncomingTransactions,
            setValue: setShowIncomingTransactions,
            title: t('showIncomingTransactions'),
            description: t('onboardingShowIncomingTransactionsDescription', [
              <a href="https://etherscan.io/" target="_blank">
                {t('etherscan')}
              </a>,
              <a href="https://cn.etherscan.com/privacyPolicy" target="_blank">
                {t('privacyMsg')}
              </a>,
            ]),
          })}
          {renderSetting({
            value: usePhishingDetection,
            setValue: setUsePhishingDetection,
            title: t('usePhishingDetection'),
            description: t('onboardingUsePhishingDetectionDescription', [
              <a href="https://www.jsdelivr.com" target="_blank">
                {t('jsDeliver')}
              </a>,
              <a
                href="https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-com"
                target="_blank"
              >
                {t('privacyMsg')}
              </a>,
            ]),
          })}
          {renderSetting({
            value: useTokenDetection,
            setValue: setUseTokenDetection,
            title: t('useTokenDetection'),
            description: t('useTokenDetectionDescription'),
          })}
        </div>
      </div>
    </>
  );
}
