import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DeltaWaveTypes = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Типы дельта-волн при синдроме WPW</h2>
        <p className="text-muted-foreground">
          Морфология дельта-волны зависит от локализации дополнительного пути проведения
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="mb-4">
            <Badge className="mb-2">Норма (без WPW)</Badge>
            <h3 className="text-xl font-semibold">Нормальное проведение</h3>
          </div>
          
          <svg className="w-full h-48 bg-white rounded-lg border" viewBox="0 0 400 150">
            <defs>
              <pattern id="grid-normal" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="150" fill="url(#grid-normal)"/>
            
            <path d="M 20 100 L 80 100 L 85 95 L 90 90 L 95 85" 
                  fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3"/>
            <text x="100" y="75" className="text-xs fill-muted-foreground">P</text>
            
            <path d="M 95 85 L 120 85 L 125 60 L 135 110 L 145 40 L 155 100" 
                  fill="none" stroke="#0A74DA" strokeWidth="2.5"/>
            <text x="165" y="75" className="text-xs fill-primary font-semibold">QRS</text>
            
            <path d="M 155 100 L 200 95 L 220 110 L 240 100 L 380 100" 
                  fill="none" stroke="#0A74DA" strokeWidth="2"/>
            <text x="250" y="120" className="text-xs fill-muted-foreground">T</text>
            
            <line x1="80" y1="130" x2="120" y2="130" stroke="#22c55e" strokeWidth="2"/>
            <text x="85" y="145" className="text-xs fill-green-600">PQ: норма</text>
            
            <text x="20" y="30" className="text-sm fill-foreground font-medium">✓ Острое начало QRS</text>
          </svg>
          
          <div className="mt-4 text-sm space-y-1">
            <p>• <strong>PQ интервал:</strong> 0.12-0.20 с</p>
            <p>• <strong>Начало QRS:</strong> острое, резкое</p>
            <p>• <strong>Дельта-волна:</strong> отсутствует</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <Badge variant="destructive" className="mb-2">Левосторонний путь WPW</Badge>
            <h3 className="text-xl font-semibold">Положительная дельта-волна</h3>
          </div>
          
          <svg className="w-full h-48 bg-white rounded-lg border" viewBox="0 0 400 150">
            <defs>
              <pattern id="grid-left" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="150" fill="url(#grid-left)"/>
            
            <path d="M 20 100 L 60 100 L 65 95 L 70 90 L 75 85" 
                  fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3"/>
            <text x="80" y="75" className="text-xs fill-muted-foreground">P</text>
            
            <path d="M 75 85 L 85 85 L 95 75 L 110 65 L 125 60" 
                  fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="5,3"/>
            <text x="90" y="55" className="text-xs fill-red-500 font-bold">δ</text>
            
            <path d="M 125 60 L 135 110 L 145 40 L 155 100" 
                  fill="none" stroke="#0A74DA" strokeWidth="2.5"/>
            
            <path d="M 155 100 L 200 95 L 220 110 L 240 100 L 380 100" 
                  fill="none" stroke="#0A74DA" strokeWidth="2"/>
            
            <line x1="60" y1="130" x2="85" y2="130" stroke="#ef4444" strokeWidth="2"/>
            <text x="62" y="145" className="text-xs fill-red-600">PQ: ↓</text>
            
            <text x="20" y="30" className="text-sm fill-foreground font-medium">⚠ Пологий восходящий склон</text>
          </svg>
          
          <div className="mt-4 text-sm space-y-1">
            <p>• <strong>PQ интервал:</strong> &lt; 0.12 с (укорочен)</p>
            <p>• <strong>Дельта:</strong> положительная, восходящая</p>
            <p>• <strong>Локализация:</strong> левый боковой путь</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <Badge variant="destructive" className="mb-2">Правосторонний путь WPW</Badge>
            <h3 className="text-xl font-semibold">Отрицательная дельта-волна</h3>
          </div>
          
          <svg className="w-full h-48 bg-white rounded-lg border" viewBox="0 0 400 150">
            <defs>
              <pattern id="grid-right" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="150" fill="url(#grid-right)"/>
            
            <path d="M 20 100 L 60 100 L 65 95 L 70 90 L 75 85" 
                  fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3"/>
            <text x="80" y="75" className="text-xs fill-muted-foreground">P</text>
            
            <path d="M 75 85 L 85 85 L 95 95 L 110 105 L 125 110" 
                  fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="5,3"/>
            <text x="90" y="120" className="text-xs fill-red-500 font-bold">δ</text>
            
            <path d="M 125 110 L 135 60 L 145 120 L 155 50 L 165 100" 
                  fill="none" stroke="#0A74DA" strokeWidth="2.5"/>
            
            <path d="M 165 100 L 200 95 L 220 110 L 240 100 L 380 100" 
                  fill="none" stroke="#0A74DA" strokeWidth="2"/>
            
            <line x1="60" y1="130" x2="85" y2="130" stroke="#ef4444" strokeWidth="2"/>
            <text x="62" y="145" className="text-xs fill-red-600">PQ: ↓</text>
            
            <text x="20" y="30" className="text-sm fill-foreground font-medium">⚠ Пологий нисходящий склон</text>
          </svg>
          
          <div className="mt-4 text-sm space-y-1">
            <p>• <strong>PQ интервал:</strong> &lt; 0.12 с (укорочен)</p>
            <p>• <strong>Дельта:</strong> отрицательная, нисходящая</p>
            <p>• <strong>Локализация:</strong> правый боковой путь</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <Badge variant="destructive" className="mb-2">Задне-септальный путь</Badge>
            <h3 className="text-xl font-semibold">Двухфазная дельта-волна</h3>
          </div>
          
          <svg className="w-full h-48 bg-white rounded-lg border" viewBox="0 0 400 150">
            <defs>
              <pattern id="grid-septal" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="150" fill="url(#grid-septal)"/>
            
            <path d="M 20 100 L 60 100 L 65 95 L 70 90 L 75 85" 
                  fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3"/>
            <text x="80" y="75" className="text-xs fill-muted-foreground">P</text>
            
            <path d="M 75 85 L 85 85 L 95 80 L 105 90 L 115 85 L 125 75" 
                  fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="5,3"/>
            <text x="95" y="70" className="text-xs fill-red-500 font-bold">δ</text>
            
            <path d="M 125 75 L 135 60 L 145 110 L 155 45 L 165 100" 
                  fill="none" stroke="#0A74DA" strokeWidth="2.5"/>
            
            <path d="M 165 100 L 200 95 L 220 110 L 240 100 L 380 100" 
                  fill="none" stroke="#0A74DA" strokeWidth="2"/>
            
            <line x1="60" y1="130" x2="85" y2="130" stroke="#ef4444" strokeWidth="2"/>
            <text x="62" y="145" className="text-xs fill-red-600">PQ: ↓</text>
            
            <text x="20" y="30" className="text-sm fill-foreground font-medium">⚠ Зазубренное начало</text>
          </svg>
          
          <div className="mt-4 text-sm space-y-1">
            <p>• <strong>PQ интервал:</strong> &lt; 0.12 с (укорочен)</p>
            <p>• <strong>Дельта:</strong> двухфазная, зазубренная</p>
            <p>• <strong>Локализация:</strong> задне-септальный путь</p>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-2xl">💡</span>
          Ключевые признаки дельта-волны
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold text-primary mb-2">1. Укороченный PQ</p>
            <p className="text-muted-foreground">
              Интервал PQ всегда &lt; 0.12 с при наличии дельта-волны
            </p>
          </div>
          
          <div>
            <p className="font-semibold text-primary mb-2">2. Пологое начало QRS</p>
            <p className="text-muted-foreground">
              Начало комплекса имеет плавный подъем или спуск, а не резкий переход
            </p>
          </div>
          
          <div>
            <p className="font-semibold text-primary mb-2">3. Расширенный QRS</p>
            <p className="text-muted-foreground">
              QRS уширен за счет слияния с дельта-волной (&gt; 0.10-0.12 с)
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DeltaWaveTypes;
