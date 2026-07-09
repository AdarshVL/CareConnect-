import { Check, Circle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineStep {
  label: string;
  description?: string;
  time?: string;
}

interface StatusTimelineProps {
  steps: TimelineStep[];
  currentStep: number;
}

const StatusTimeline = ({ steps, currentStep }: StatusTimelineProps) => {
  return (
    <div className="space-y-0">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isPending = index > currentStep;

        return (
          <div key={step.label} className="relative flex gap-4">
            {/* Line */}
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "absolute left-[15px] top-8 w-0.5 h-full -translate-x-1/2",
                  isCompleted ? "bg-success" : "bg-border"
                )}
              />
            )}

            {/* Icon */}
            <div className="relative z-10 mt-1">
              {isCompleted ? (
                <div className="w-8 h-8 rounded-full gradient-success flex items-center justify-center shadow-md">
                  <Check className="h-4 w-4 text-success-foreground" />
                </div>
              ) : isCurrent ? (
                <div className="w-8 h-8 rounded-full gradient-emergency flex items-center justify-center shadow-emergency animate-pulse">
                  <Loader2 className="h-4 w-4 text-emergency-foreground animate-spin" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className={cn(
              "flex-1 pb-8",
              isPending && "opacity-50"
            )}>
              <div className="flex items-center justify-between">
                <h4 className={cn(
                  "font-semibold",
                  isCurrent && "text-emergency",
                  isCompleted && "text-success"
                )}>
                  {step.label}
                </h4>
                {step.time && (
                  <span className="text-xs text-muted-foreground">{step.time}</span>
                )}
              </div>
              {step.description && (
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatusTimeline;
