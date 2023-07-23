import _compact from 'lodash/compact';
import debounce from 'lodash/debounce';

export function getLocalStorage(key: string) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving from localStorage:', error);
    return null;
  }
}

export function setLocalStorage(key: string, value: any) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error storing to localStorage:', error);
  }
}

export function clearLocalStorage(key: string) {
  try {
    if (key) {
      localStorage.removeItem(key);
    } else {
      localStorage.clear();
    }
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}

/** 一般场景的防抖操作，先进行延时阻止，再进行操作 */
export const debounceFunLazyly = debounce((fn) => {
  fn && fn();
}, 300);
/** 表单页的防抖操作，先执行方法，再进行延时阻止 */
export const debounceFun = debounce(
  (fn) => {
    fn && fn();
  },
  500,
  { leading: true, trailing: false }
);

export function initRem(
  isMinScreen: boolean,
  setIsMinScreen: React.Dispatch<React.SetStateAction<boolean>>
): void {
  // 4k适配
  const docEle = document.documentElement;
  function setHtmlFontSize() {
    try {
      let deviceWidth = docEle.clientWidth || window.innerWidth;
      if (deviceWidth <= 1138) {
        deviceWidth = 1138;
        setIsMinScreen(true);
      } else {
        setIsMinScreen(false);
      }
      const fontSize = deviceWidth / 1920;
      docEle.style.fontSize = `${16 * Math.min(fontSize, 4)}px`;
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  }
  setHtmlFontSize();
  window.addEventListener('resize', debounce(setHtmlFontSize, 300));
}

export const setTitle = (...args: string[]) => {
  const title = _compact(args).join('_');

  setTimeout(() => {
    document.title = title;
  });
};

export const smoothScroll = (
  targetPosition: number,
  duration?: number
): void => {
  // 检查浏览器是否支持 scrollBehavior 属性
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
    return;
  }

  // 兼容旧版本浏览器
  const startingY = window.pageYOffset;
  const diff = targetPosition - startingY;
  duration = duration || 500;

  const easing = (t: number): number =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const perFrameDistance = (diff / duration) * 16;
  let requestId: number | null;
  let animationStartTime: DOMHighResTimeStamp | null = null;

  const step: FrameRequestCallback = (timestamp: DOMHighResTimeStamp) => {
    if (!animationStartTime) {
      animationStartTime = timestamp;
    }
    const timeElapsed = timestamp - animationStartTime;
    const percent = easing(timeElapsed / duration);

    window.scrollBy(0, perFrameDistance * percent);

    if (timeElapsed < duration) {
      requestId = window.requestAnimationFrame(step);
    }
  };

  requestId = window.requestAnimationFrame(step);

  const cancelScroll: (event: Event) => void = () => {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
      requestId = null;
    }
  };

  window.addEventListener('mousedown', cancelScroll, { passive: true });
  window.addEventListener('wheel', cancelScroll, { passive: true });
  window.addEventListener('touchstart', cancelScroll, { passive: true });
  window.addEventListener('keydown', cancelScroll, { passive: true });
  window.addEventListener('resize', cancelScroll, { passive: true });
};

export function scrollToElementById(
  id: string,
  duration = 500,
  offset = 0
): void {
  const targetElement = document.getElementById(id);
  console.log(targetElement);
  if (!targetElement) {
    return;
  }
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
  smoothScroll(targetPosition, duration);
}
