import styled from "styled-components";

const Page = styled.div`
  &.lists-show .content-scrollable {
    background: white;
    top: 5em !important;
  }
  &.auth {
    text-align: center;
  }
  &.auth .content-scrollable {
    background: #d2edf4;
  }
  &.auth .wrapper-auth {
    padding-top: 4em;
  }
  @media screen and (min-width: 40em) {
    &.auth .wrapper-auth {
      margin: 0 auto;
      max-width: 480px;
      width: 80%;
    }
  }
  &.auth .wrapper-auth .title-auth {
    font-size: 40px;
    line-height: 48px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 300;
    color: #1c3f53;
    margin-bottom: 0.75rem;
  }
  &.auth .wrapper-auth .subtitle-auth {
    color: #666666;
    margin: 0 15% 3rem;
  }
  &.auth .wrapper-auth form .input-symbol {
    margin-bottom: 1px;
    width: 100%;
  }
  &.auth .wrapper-auth form .btn-primary {
    margin: 1em 5% 0;
    width: 90%;
  }
  @media screen and (min-width: 40em) {
    &.auth .wrapper-auth form .btn-primary {
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    }
  }
  &.auth .wrapper-auth .list-errors {
    margin-top: -2rem;
  }
  &.auth .wrapper-auth .list-errors .list-item {
    letter-spacing: 0.3em;
    text-indent: 0.3em;
    text-transform: uppercase;
    background: #f6fccf;
    color: #ff4400;
    font-size: 0.625em;
    margin-bottom: 1px;
    padding: 0.7rem 0;
  }
  &.auth .link-auth-alt {
    font-size: 12px;
    line-height: 16px;
    position: absolute;
    top: auto;
    right: 0;
    bottom: 1em;
    left: 0;
    width: auto;
    height: auto;
    color: #aaaaaa;
    display: inline-block;
  }
  @media screen and (min-width: 40em) {
    &.auth .link-auth-alt {
      bottom: 0;
      margin-top: 1rem;
      position: relative;
    }
  }
  &.not-found .content-scrollable {
    background: #d2edf4;
  }
`;

export default Page;
