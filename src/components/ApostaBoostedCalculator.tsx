
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calculator } from "lucide-react";

export function ApostaBoostedCalculator() {
  const [oddOriginal, setOddOriginal] = useState<string>("2.00");
  const [percentualAumento, setPercentualAumento] = useState<string>("25");
  const [oddFinal, setOddFinal] = useState<string>("2.50");

  const calcularOddAumentada = () => {
    const odd = parseFloat(oddOriginal);
    const percentual = parseFloat(percentualAumento);
    
    if (!isNaN(odd) && !isNaN(percentual)) {
      const oddAumentada = ((odd - 1) * (1 + (percentual / 100))) + 1;
      setOddFinal(oddAumentada.toFixed(2));
    }
  };

  useEffect(() => {
    calcularOddAumentada();
  }, [oddOriginal, percentualAumento]);

  const handleOddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOddOriginal(e.target.value);
  };

  const handlePercentualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentualAumento(e.target.value);
  };

  return (
    <Card className="bg-betting-green w-full md:max-w-xs text-gray-800 shadow-lg">
      <CardHeader className="pb-3 md:pb-4 pt-4 md:pt-6">
        <CardTitle className="text-center flex items-center justify-center gap-2 text-white text-base md:text-lg">
          <Calculator size={18} />
          <span>Aposta Aumentada</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 md:space-y-4">
        <div>
          <label className="block text-white text-xs md:text-sm font-medium mb-1">
            Odd Original
          </label>
          <Input
            type="number"
            step="0.01"
            min="1"
            value={oddOriginal}
            onChange={handleOddChange}
            className="bg-white text-gray-800 h-8 md:h-10 text-sm md:text-base"
          />
        </div>
        
        <div>
          <label className="block text-white text-xs md:text-sm font-medium mb-1">
            Percentual de Aumento (%)
          </label>
          <Input
            type="number"
            step="0.1"
            min="0"
            value={percentualAumento}
            onChange={handlePercentualChange}
            className="bg-white text-gray-800 h-8 md:h-10 text-sm md:text-base"
          />
        </div>

        <div className="pt-1 md:pt-2">
          <div className="text-center bg-white p-2 md:p-3 rounded-md">
            <p className="text-xs md:text-sm font-medium text-gray-600">Odd Aumentada</p>
            <p className="text-xl md:text-2xl font-bold text-gray-800">{oddFinal}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
