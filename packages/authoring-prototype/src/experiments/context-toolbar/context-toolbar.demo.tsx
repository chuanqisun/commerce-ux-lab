import * as React from 'react';
import { useState, useEffect } from 'react';
import { Toolbar } from './context-toolbar.exp.1';
import styled from 'styled-components';

export function ContextToolbarDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveringElement, setHoveringElement] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [pinnedElement, setPinnedElement] = useState(null);
  const [isMouseInToolbar, setIsMouseInToolbar] = useState(false);

  useEffect(() => {
    document.body.onscroll = handleOnScroll;
  });

  function handleMouseMove(e: any) {
    // perf: should optimize this with requestAnimationFrame
    if (pinnedElement) return;
    setMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
  }

  function handleMouseOver(e: any) {
    if (pinnedElement) return;
    if (e.target.matches('.toolbar')) return;
    const moduleElement = e.target.closest('[data-module]');
    console.dir(moduleElement);
    setHoveringElement(moduleElement);
  }

  function handleClick(e: any) {
    console.log('clicked');
    const moduleElement = e.target.closest('[data-module]');
    setSelectedElement(moduleElement);
    document.querySelector('.selected')!.classList.remove('selected');
    moduleElement.classList.add('selected');
    setPinnedElement(moduleElement);

    setMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
  }

  function handleOnScroll(e: any) {
    console.log('scrolled');
    setPinnedElement(null);
  }

  function handleToolbarClose(e: any) {
    setPinnedElement(null);
  }

  function onMouseEnterToolbar(e: any) {
    setIsMouseInToolbar(true);
  }

  function onMouseLeaveToolbar(e: any) {
    setIsMouseInToolbar(false);
  }

  return (
    <>
      <StyledPage data-module="PageRoot" className="mock-document selected" onClick={handleClick} onMouseMove={handleMouseMove} onMouseOver={handleMouseOver}>
        <header data-slot="Header">
          <div className="header-group" data-module="Header">
            <div data-slot="LogoSlot">
              <img data-module="Logo" src="https://via.placeholder.com/200x100" />
            </div>
            <div className="search-slot" data-slot="SearchSlot">
              <div data-module="SearchBox">
                <input className="search-input" type="search" placeholder="Search products" />
                <button>Search</button>
              </div>
            </div>
            <div className="nav-slot" data-slot="NavSlot">
              <div className="global-nav" data-module="GlobalNav">
                <h3>Men</h3>
                <h3>Women</h3>
                <h3>Kids</h3>
                <h3>Accessories</h3>
              </div>
            </div>
          </div>
        </header>
        <main data-slot="Main">
          <div data-module="BuyBox" className="buybox">
            <div data-slot="MediaSlot">
              <div data-module="MediaGallery">
                <img data-module="Logo" src="https://via.placeholder.com/400x400" />
              </div>
            </div>
            <div data-slot="MainSlot" className="buybox--right">
              <div data-module="ProductTitle">
                <h2>Teletubby Costume — Dipsy Edition</h2>
              </div>
              <div data-module="ProductRating">
                <h2>★★★★☆</h2>
              </div>
              <div data-module="ProductPrice">
                <h2>$200</h2>
              </div>
              <div data-module="BuyAction">
                <button>Buy now</button>
                <button>Add to wishlist</button>
              </div>
            </div>
          </div>
          <div data-module="ContentPlacement">
            <div data-slot="ContentPlacementSlot" className="content-placement">
              <div data-module="ContentPlacementItem" className="content-placement--item">
                <img src="https://via.placeholder.com/400x400" />
                <h3>Shop now</h3>
              </div>
              <div data-module="ContentPlacementItem" className="content-placement--item">
                <img src="https://via.placeholder.com/400x400" />
                <h3>Shop now</h3>
              </div>
              <div data-module="ContentPlacementItem" className="content-placement--item">
                <img src="https://via.placeholder.com/400x400" />
                <h3>Shop now</h3>
              </div>
            </div>
          </div>
        </main>
        <footer data-slot="Footer" className="footer">
          <div data-module="FooterNav">
            <div data-slot="SitemapSlot" className="sitemap-slot">
              <ul data-module="FooterNavList">
                <h2>Section</h2>
                <li>link</li>
                <li>link</li>
                <li>link</li>
              </ul>
              <ul data-module="FooterNavList">
                <h2>Section</h2>
                <li>link</li>
                <li>link</li>
                <li>link</li>
              </ul>
              <ul data-module="FooterNavList">
                <h2>Section</h2>
                <li>link</li>
                <li>link</li>
                <li>link</li>
              </ul>
            </div>
          </div>
        </footer>
      </StyledPage>
      <Toolbar
        onMouseEnter={onMouseEnterToolbar}
        onMouseLeave={onMouseLeaveToolbar}
        onClose={handleToolbarClose}
        pos={mousePosition}
        hoveringElement={hoveringElement}
        pinnedElement={pinnedElement}
      />
    </>
  );
}

const StyledPage = styled.div`
  [data-module] {
    border: 2px solid transparent;
    margin: 1em;
    padding: 2px;
  }

  [data-slot] {
    border: 2px dashed transparent;
    margin: 2px;
    padding: 2px;
  }

  .mock-document {
    margin: 0;
  }

  .mock-document {
    background-color: #f8f7f6;
  }

  .header-group {
    display: flex;
    background-color: rgb(218, 218, 218);
    flex-wrap: wrap;
  }

  .search-slot {
    margin-left: auto;
  }

  .search-input {
    width: 300px;
  }

  .nav-slot {
    width: 100%;
  }

  .global-nav {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 1em;
  }

  .buybox {
    display: flex;
  }

  .buybox--right {
    flex-grow: 1;
  }

  .content-placement {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .content-placement--item img {
    width: 100%;
  }

  .selected {
    border-color: #0078d4;
  }

  .selected > [data-slot] {
    border-color: #0078d4;
  }

  .footer {
    background: rgb(204, 204, 204);
    color: black;
  }

  .sitemap-slot {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  .sitemap-slot ul {
    list-style: none;
    margin: 0;
  }
`;
