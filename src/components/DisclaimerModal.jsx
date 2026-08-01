import { useState } from 'react'
import Logo from './Logo.jsx'

export default function DisclaimerModal({ onAgree }) {
  const [showDisagree, setShowDisagree] = useState(false)

  if (showDisagree) {
    return (
      <div className="disclaimer-overlay" role="dialog" aria-modal="true" aria-label="Disclaimer declined">
        <div className="disclaimer-card">
          <Logo variant="light" />
          <p className="disclaimer-firmname">
            DI VERDICTUM <span>LAW CHAMBERS LLP</span>
          </p>
          <h2 className="disclaimer-title">Access Not Granted</h2>
          <div className="disclaimer-text">
            <p>
              As per the rules of the Bar Council of India, lawyers and law firms are not permitted
              to solicit work or advertise. By choosing "Disagree", you have indicated that you do
              not wish to proceed, and no advertisement, solicitation, or personal communication has
              taken place between you and DI VERDICTUM LAW CHAMBERS LLP.
            </p>
            <p>
              You are welcome to return to this website at any time, should you independently wish to
              seek information about the firm for your own use.
            </p>
          </div>
          <div className="disclaimer-actions">
            <button className="btn btn-disclaimer-dark" onClick={() => setShowDisagree(false)}>
              Return to Disclaimer
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="disclaimer-overlay" role="dialog" aria-modal="true" aria-label="Legal disclaimer">
      <div className="disclaimer-card">
        <Logo variant="light" />
        <p className="disclaimer-firmname">
          DI VERDICTUM <span>LAW CHAMBERS LLP</span>
        </p>
        <h2 className="disclaimer-title">Disclaimer &amp; Confirmation</h2>

        <div className="disclaimer-text">
          <p>
            As per the rules of the Bar Council of India, lawyers and law firms are not permitted to
            solicit work or advertise. By clicking on the "Agree" button below, the user agrees and
            acknowledges as following that:-
          </p>
          <p>
            there has been no advertisement, personal communication, solicitation, invitation or
            inducement of any sort whatsoever from us or any of our members to solicit any work
            through this website;
          </p>
          <p>
            the user wishes to gain more information about us for his/her own information and use,
            the information about us is provided to the user only on his/her specific request and
            any information obtained or materials downloaded from this website is completely at the
            user's volition, and any transmission, receipt or use of this site would not create any
            lawyer-client relationship;
          </p>
          <p>
            DI VERDICTUM LAW CHAMBERS LLP is not liable for any consequence of any action taken by
            the user relying on material or information provided on this website. The information
            provided under this website is solely available at the user's request for informational
            purposes only, and should not be interpreted as soliciting or advertisement. In case the
            user has any legal issues, he/she shall seek independent legal advice.
          </p>
        </div>

        <div className="disclaimer-actions">
          <button className="btn btn-disclaimer-dark" onClick={onAgree}>
            Agree
          </button>
          <button className="btn btn-disclaimer-outline" onClick={() => setShowDisagree(true)}>
            Disagree
          </button>
        </div>

        <p className="disclaimer-disagree-note">
          By clicking "Agree", you accept that you are seeking information of your own accord and
          volition, and that no solicitation has taken place by DI VERDICTUM LAW CHAMBERS LLP or any
          of its members.
        </p>
      </div>
    </div>
  )
}
