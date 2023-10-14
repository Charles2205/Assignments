const Phone =()=>{
    return (
        <>
        
        <div className="illustration" aria-hidden="true">
        <div className="illustration__phone">
          <div className="person">
            <div className="person__wrapper">
              <div className="person__child">
                <img
                  src="./icons/chevron-left.svg"
                  alt=""
                  className="person__chevron-left"
                  width="14"
                  height="14"
                />
                <figure className="person__profile">
                  <img
                    src="public/images/avatar.jpg"
                    alt=""
                    className="person__photo"
                    width="24"
                    height="24"
                  />
                  <figcaption className="person__data">
                    <p className="person__name">Samuel Green</p>
                    <p className="person__status">Available to Walk</p>
                  </figcaption>
                </figure>
              </div>
              <img
                src="./icons/dots-three-vertical.svg"
                alt=""
                className="person__menu"
                width="12"
                height="12"
              />
            </div>
          </div>
          <div className="chat">
            <div className="chat__container">
              <div className="chat__bubble chat__bubble--purple">
                <p className="chat__message">
                  That sounds great. I’d be happy with that.
                </p>
              </div>
              <div className="chat__bubble chat__bubble--purple">
                <p className="chat__message">
                  Could you send over some pictures of your dog,
                  please?
                </p>
              </div>
              <div className="chat__right">
                <ul className="chat__images">
                  <li className="chat__item">
                    <img
                      src="./images/dog-image-1.jpg"
                      alt=""
                      className="chat__image"
                      width="90"
                      height="90"
                    />
                  </li>
                  <li className="chat__item">
                    <img
                      src="./images/dog-image-2.jpg"
                      alt=""
                      className="chat__image"
                      width="90"
                      height="90"
                    />
                  </li>
                  <li className="chat__item">
                    <img
                      src="./images/dog-image-3.jpg"
                      alt=""
                      className="chat__image"
                      width="90"
                      height="90"
                    />
                  </li>
                </ul>
                <div className="chat__bubble chat__bubble--white">
                  <p className="chat__message">
                    Here are a few pictures. She’s a happy girl!
                  </p>
                </div>
                <div className="chat__bubble chat__bubble--white">
                  <p className="chat__message">Can you make it?</p>
                </div>
              </div>
              <div className="chat__bubble chat__bubble--purple">
                <p className="chat__message">
                  She looks so happy! The time we discussed works. How
                  long shall I take her out for?
                </p>
              </div>
              <div className="chat__bubble chat__bubble--gradient">
                <p className="chat__message">
                  <span className="chat__wrapper">
                    <img
                      src="./icons/circle-thin.svg"
                      alt=""
                      className="chat__radio-btn"
                      width="14"
                      height="14"
                    />
                    30 minutes walk
                  </span>
                  <strong className="chat__price">$29</strong>
                </p>
              </div>
              <div className="chat__bubble chat__bubble--gradient">
                <p className="chat__message">
                  <span className="chat__wrapper">
                    <img
                      src="./icons/circle-thin.svg"
                      alt=""
                      className="chat__radio-btn"
                      width="14"
                      height="14"
                    />
                    1 hour walk
                  </span>
                  <strong className="chat__price">$49</strong>
                </p>
              </div>
              <div className="chat__input">
                <p className="chat__placeholder">Type a message…</p>
                <div className="chat__send-btn">
                  <img
                    src="./icons/chevron-right.svg"
                    alt=""
                    className="chat__chevron"
                    width="16"
                    height="16"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        </>

    )
}

export default Phone