'use'
import { Button } from '@/components/ui/button';
import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  const setLocale = () => {
    localStorage.setItem('locale', 'vi')
  }
  return <div>
    <h1>{t('title')}</h1>
    <Button onClick={setLocale}>aa</Button>
  </div>;
}