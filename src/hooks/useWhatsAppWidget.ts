"use client";

import { useCallback, useEffect, useState } from "react";

interface UseWhatsAppWidgetOptions {
  enabled: boolean;
  showGreeting: boolean;
  delay?: number;
}


export function useWhatsAppWidget({
  enabled,
  showGreeting,
  delay = 5000,
}: UseWhatsAppWidgetOptions) {
  const [isGreetingVisible, setIsGreetingVisible] = useState(false);

  useEffect(() => {
    if (!enabled || !showGreeting) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsGreetingVisible(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [enabled, showGreeting, delay]);

  const openGreeting = useCallback(() => {
    setIsGreetingVisible(true);
  }, []);

  const closeGreeting = useCallback(() => {
    setIsGreetingVisible(false);
  }, []);

  const toggleGreeting = useCallback(() => {
    setIsGreetingVisible((visible) => !visible);
  }, []);

  return {
    isGreetingVisible,
    openGreeting,
    closeGreeting,
    toggleGreeting,
  };
}