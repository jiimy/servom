'use client';
import React, { useRef, useState } from 'react';
import s from './bottommenu.module.scss';
import DragButton from '../button/DragButton';
import Link from 'next/link';

// 경로로 하단메뉴 구분.
const BottomMenu = () => {

  return (
    <div className={s.bottom_menu}>
      <ul>
        <li>
          <Link href="rank">랭킹</Link>
        </li>
        <li>
          <Link href="/standby">등록대기</Link>
        </li>
        <li>
          <DragButton />
        </li>
        <li>
          <Link href="/favorite">내 즐겨찾기</Link>
        </li>
        <li>
          <Link href="/mypage">
            마이페이지
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;