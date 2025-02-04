import React from 'react';
import { projectSettingsIcon } from 'constants/icons';
import { observer } from 'mobx-react-lite';
import { WETool } from 'personalities/WorldEditorPersonality/store/WEToolbarState';
import { BaseTool } from '../BaseTool/BaseTool';
import s from './SettingsTool.module.scss';
import { div } from 'utils/styled';
import { WESettingsState } from 'personalities/WorldEditorPersonality/store/WESettingsState';
import { Checkbox } from 'components/controls/Checkbox/Checkbox';

const Root = div(s, 'root');
const Block = div(s, 'block');
const Label = div(s, 'label');
const Control = div(s, 'control');

export const SettingsTool = observer(function SettingsTool() {
  return (
    <BaseTool
      tool={WETool.Settings}
      icon={projectSettingsIcon}
      label="Settings"
    >
      <Root>
        <Block>
          <Label>
            Mouse sensetivity
          </Label>
          <Control>
            <input
              type="range"
              min={1}
              max={100}
              value={WESettingsState.settings.mouseSensetivity}
              onChange={({ target: { value } }) => WESettingsState.setMouseSensetivity(parseInt(value, 10))}
            />
          </Control>
        </Block>

        <Block>
          <Checkbox
            label="Show bounding box for selected entity"
            value={WESettingsState.settings.showSelectionBoundingBox}
            onChange={(value) => WESettingsState.setShowSelectionBoundingBox(value)}
          />
        </Block>
      </Root>
    </BaseTool>
  );
});
