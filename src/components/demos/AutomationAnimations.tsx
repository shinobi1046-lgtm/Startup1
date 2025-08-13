import { useState, useEffect } from "react";
import { Mail, FileSpreadsheet, FileText, ArrowRight, CheckCircle2, Clock } from "lucide-react";

// Animation component for Forms → Sheets → Gmail
export const FormsToGmailAnimation = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 min-h-[120px]">
      <div className={`flex flex-col items-center transition-all duration-500 ${step >= 0 ? 'scale-110 text-primary' : 'scale-100'}`}>
        <div className="size-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-2">
          📝
        </div>
        <span className="text-xs text-center">Form<br/>Submission</span>
      </div>
      
      <ArrowRight className={`size-6 transition-all duration-300 ${step >= 1 ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
      
      <div className={`flex flex-col items-center transition-all duration-500 ${step >= 1 ? 'scale-110 text-primary' : 'scale-100'}`}>
        <div className="size-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-2">
          <FileSpreadsheet className="size-6" />
        </div>
        <span className="text-xs text-center">Auto-Added<br/>to Sheets</span>
      </div>
      
      <ArrowRight className={`size-6 transition-all duration-300 ${step >= 2 ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
      
      <div className={`flex flex-col items-center transition-all duration-500 ${step >= 2 ? 'scale-110 text-primary' : 'scale-100'}`}>
        <div className="size-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-2">
          <Mail className="size-6" />
        </div>
        <span className="text-xs text-center">Personalized<br/>Email Sent</span>
      </div>
      
      {step === 3 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <CheckCircle2 className="size-8 text-green-500 animate-bounce" />
        </div>
      )}
    </div>
  );
};

// Animation component for Sheets → Docs → PDF → Gmail
export const SheetsToPdfAnimation = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4 p-4 min-h-[120px]">
      <div className="grid grid-cols-4 gap-2">
        <div className={`flex flex-col items-center transition-all duration-500 ${step >= 0 ? 'scale-105 text-primary' : 'scale-100'}`}>
          <FileSpreadsheet className="size-8 mb-1" />
          <span className="text-xs">Data</span>
        </div>
        <div className={`flex flex-col items-center transition-all duration-500 ${step >= 1 ? 'scale-105 text-primary' : 'scale-100'}`}>
          <FileText className="size-8 mb-1" />
          <span className="text-xs">Doc</span>
        </div>
        <div className={`flex flex-col items-center transition-all duration-500 ${step >= 2 ? 'scale-105 text-primary' : 'scale-100'}`}>
          📄
          <span className="text-xs">PDF</span>
        </div>
        <div className={`flex flex-col items-center transition-all duration-500 ${step >= 3 ? 'scale-105 text-primary' : 'scale-100'}`}>
          <Mail className="size-8 mb-1" />
          <span className="text-xs">Email</span>
        </div>
      </div>
      <div className="text-center">
        <span className="text-xs text-muted-foreground">
          {step === 0 && "Reading sheet data..."}
          {step === 1 && "Generating document..."}
          {step === 2 && "Converting to PDF..."}
          {step === 3 && "Sending via email..."}
          {step === 4 && "✓ Quote delivered automatically!"}
        </span>
      </div>
    </div>
  );
};

// Animation component for KPI Dashboards
export const KpiDashboardAnimation = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 10) % 110);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 space-y-4 min-h-[120px]">
      <div className="grid grid-cols-3 gap-2">
        <div className="glass-card p-2 text-center">
          <div className="text-lg font-bold text-primary">{Math.floor(progress * 1.2)}%</div>
          <div className="text-xs text-muted-foreground">Sales Target</div>
        </div>
        <div className="glass-card p-2 text-center">
          <div className="text-lg font-bold text-primary">{Math.floor(progress * 0.8)}</div>
          <div className="text-xs text-muted-foreground">New Leads</div>
        </div>
        <div className="glass-card p-2 text-center">
          <div className="text-lg font-bold text-primary">${Math.floor(progress * 150)}K</div>
          <div className="text-xs text-muted-foreground">Revenue</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="size-4 text-primary" />
        <span className="text-xs">Auto-refreshes every Monday at 9 AM</span>
      </div>
    </div>
  );
};

// Simple animation for other demos
export const SimpleWorkflowAnimation = ({ icon: Icon, steps }: { icon: any, steps: string[] }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="p-4 space-y-4 min-h-[120px]">
      <div className="flex items-center justify-center">
        <div className="size-16 rounded-full bg-secondary/50 flex items-center justify-center">
          <Icon className="size-8 text-primary" />
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm font-medium">{steps[currentStep]}</div>
        <div className="flex justify-center mt-2 space-x-1">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`size-2 rounded-full transition-all duration-300 ${
                idx === currentStep ? 'bg-primary' : 'bg-secondary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};