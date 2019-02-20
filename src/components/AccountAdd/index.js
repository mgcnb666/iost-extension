import React, { Component, Fragment } from 'react'
import { I18n } from 'react-redux-i18n'
import Input from 'components/Input'
import Button from 'components/Button'
<<<<<<< HEAD
import { Landing, Header } from 'components'
=======
import { Header, Landing } from 'components'
>>>>>>> d7760dd73d0ab62b9b4353de27ba88c1d97370cd
import iost from 'iostJS/iost'
import { privateKeyToPublicKey } from 'utils/key'


import './index.scss'
import ui from "utils/ui";

type Props = {

}

class AccountAdd extends Component<Props> {
  moveTo = (location) => () => {
    const { changeLocation } = this.props
    changeLocation(location)
  }

  render() {
    return (
      <Fragment>
        <Header title={I18n.t('accountAdd')} onBack={this.moveTo('/accountManage')} hasSetting={false} />
        <Landing className="landing-color" />
        <div className="accountAdd-box">
          <Button className="btn-accountCreate" onClick={this.moveTo('/accountCreateStep1')}>{I18n.t('accountCreate')}</Button>
          <Button className="btn-accountImport" onClick={this.moveTo('/accountImport')}>{I18n.t('accountImport')}</Button>
        </div>
      </Fragment>
    )
  }
}

export default AccountAdd