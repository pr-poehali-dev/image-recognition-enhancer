import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

interface ECGAnalysis {
  pqInterval: number;
  deltaWave: boolean;
  rhythm: string;
  qrsDuration: number;
  heartRate: number;
  diagnosis: string;
  recommendations: string[];
}

const Index = () => {
  const [analysis, setAnalysis] = useState<ECGAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeECG = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const mockAnalysis: ECGAnalysis = {
        pqInterval: 0.18,
        deltaWave: true,
        rhythm: 'Синусовый ритм с признаками предвозбуждения',
        qrsDuration: 0.12,
        heartRate: 75,
        diagnosis: 'Синдром WPW (Вольфа-Паркинсона-Уайта)',
        recommendations: [
          'Консультация кардиолога',
          'Холтеровское мониторирование',
          'ЭхоКГ для оценки структуры сердца',
          'Исключить физические нагрузки до консультации'
        ]
      };
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Icon name="Activity" size={40} className="text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            ECG Analysis
          </h1>
          <p className="text-muted-foreground text-lg">
            Автоматизированная оценка электрокардиограммы
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="FileText" size={24} className="text-primary" />
              <h2 className="text-2xl font-semibold">Загруженная ЭКГ</h2>
            </div>
            
            <div className="bg-white rounded-lg p-4 border-2 border-border mb-6">
              <div className="relative h-64 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 800 200">
                  <defs>
                    <pattern id="ecg-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    </pattern>
                    <pattern id="ecg-grid-major" width="50" height="50" patternUnits="userSpaceOnUse">
                      <rect width="50" height="50" fill="url(#ecg-grid)"/>
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#d1d5db" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  
                  <rect width="800" height="200" fill="url(#ecg-grid-major)"/>
                  
                  <path
                    d="M 0 100 L 50 100 L 60 100 L 65 80 L 75 120 L 85 60 L 95 100 L 110 95 L 125 90 L 135 100 
                       L 150 100 L 160 100 L 165 80 L 175 120 L 185 60 L 195 100 L 210 95 L 225 90 L 235 100
                       L 250 100 L 260 100 L 265 80 L 275 120 L 285 60 L 295 100 L 310 95 L 325 90 L 335 100
                       L 350 100 L 360 100 L 365 80 L 375 120 L 385 60 L 395 100 L 410 95 L 425 90 L 435 100
                       L 450 100 L 460 100 L 465 80 L 475 120 L 485 60 L 495 100 L 510 95 L 525 90 L 535 100
                       L 550 100 L 560 100 L 565 80 L 575 120 L 585 60 L 595 100 L 610 95 L 625 90 L 635 100
                       L 650 100 L 660 100 L 665 80 L 675 120 L 685 60 L 695 100 L 710 95 L 725 90 L 735 100 L 800 100"
                    fill="none"
                    stroke="#0A74DA"
                    strokeWidth="2"
                    className="animate-ecg-line"
                  />
                </svg>
              </div>
              
              <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                <Icon name="Info" size={16} />
                <span className="font-medical">Отведения: aVL, aVF • Скорость: 25 мм/с</span>
              </div>
            </div>

            <Button 
              onClick={analyzeECG} 
              className="w-full h-12 text-base font-semibold"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                  Анализирую ЭКГ...
                </>
              ) : (
                <>
                  <Icon name="Activity" size={20} className="mr-2" />
                  Начать анализ
                </>
              )}
            </Button>
          </Card>

          <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="FileBarChart" size={24} className="text-primary" />
              <h2 className="text-2xl font-semibold">Результаты анализа</h2>
            </div>

            {!analysis ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="p-4 bg-muted rounded-full mb-4">
                  <Icon name="Heart" size={48} className="text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-lg">
                  Загрузите ЭКГ и нажмите<br />"Начать анализ"
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="text-sm text-muted-foreground mb-1">ЧСС</div>
                    <div className="text-2xl font-bold font-medical text-primary">
                      {analysis.heartRate} <span className="text-base font-normal">уд/мин</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="text-sm text-muted-foreground mb-1">Интервал PQ</div>
                    <div className="text-2xl font-bold font-medical text-primary">
                      {analysis.pqInterval} <span className="text-base font-normal">с</span>
                    </div>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {analysis.pqInterval < 0.12 ? 'Укорочен' : analysis.pqInterval > 0.20 ? 'Удлинен' : 'Норма'}
                    </Badge>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="text-sm text-muted-foreground mb-1">QRS</div>
                    <div className="text-2xl font-bold font-medical text-primary">
                      {analysis.qrsDuration} <span className="text-base font-normal">с</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="text-sm text-muted-foreground mb-1">Дельта-волна</div>
                    <div className="text-2xl font-bold font-medical">
                      {analysis.deltaWave ? (
                        <Badge variant="destructive" className="text-base">
                          <Icon name="AlertTriangle" size={16} className="mr-1" />
                          Есть
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-base">Нет</Badge>
                      )}
                    </div>
                  </div>
                </div>

                <Alert className="bg-blue-50 border-blue-200">
                  <Icon name="Activity" size={18} className="text-primary" />
                  <AlertDescription className="font-medium">
                    {analysis.rhythm}
                  </AlertDescription>
                </Alert>

                {analysis.deltaWave && (
                  <Alert variant="destructive">
                    <Icon name="AlertCircle" size={18} />
                    <AlertDescription>
                      <div className="font-semibold mb-2">{analysis.diagnosis}</div>
                      <div className="text-sm space-y-1">
                        {analysis.recommendations.map((rec, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </Card>
        </div>

        <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-4">
            <Icon name="BookOpen" size={24} className="text-primary" />
            <h2 className="text-2xl font-semibold">Медицинская справка</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-primary" />
                Интервал PQ
              </h3>
              <p className="text-sm text-muted-foreground">
                <strong>Норма:</strong> 0.12-0.20 с<br />
                Отражает время проведения импульса от предсердий к желудочкам
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Icon name="TrendingUp" size={18} className="text-primary" />
                Дельта-волна
              </h3>
              <p className="text-sm text-muted-foreground">
                <strong>Патологический признак</strong><br />
                Указывает на наличие дополнительного пути проведения (синдром WPW)
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Icon name="Heart" size={18} className="text-primary" />
                Ритм сердца
              </h3>
              <p className="text-sm text-muted-foreground">
                <strong>Синусовый:</strong> норма<br />
                Регулярный ритм с источником в синусовом узле
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
