import { useMemo, useState } from "react";
import { Calculator, CheckCircle, Copy, Info } from "lucide-react";

const currency = (val: number) =>
  val.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export default function RoiCalculator() {
  const [inputs, setInputs] = useState({
    annualIncidents: "2",
    avgIncidentCost: "150000",
    reductionPercent: "35",
    programMonthlyCost: "8000",
    auditFindings: "4",
    avgFindingCost: "12000",
  });

  const parsed = useMemo(() => {
    const toNum = (v: string) => {
      const n = parseFloat(v);
      return Number.isFinite(n) ? n : 0;
    };
    return {
      annualIncidents: toNum(inputs.annualIncidents),
      avgIncidentCost: toNum(inputs.avgIncidentCost),
      reductionPercent: toNum(inputs.reductionPercent),
      programMonthlyCost: toNum(inputs.programMonthlyCost),
      auditFindings: toNum(inputs.auditFindings),
      avgFindingCost: toNum(inputs.avgFindingCost),
    };
  }, [inputs]);

  const results = useMemo(() => {
    const annualIncidentLoss = parsed.annualIncidents * parsed.avgIncidentCost;
    const auditRemediationSpend = parsed.auditFindings * parsed.avgFindingCost;
    const baselineExposure = annualIncidentLoss + auditRemediationSpend;
    const avoidedLoss = baselineExposure * (parsed.reductionPercent / 100);
    const programAnnualCost = parsed.programMonthlyCost * 12;
    const netImpact = avoidedLoss - programAnnualCost;
    const roiPercent = programAnnualCost > 0 ? (netImpact / programAnnualCost) * 100 : 0;
    const monthlyValue = avoidedLoss / 12;
    const paybackMonths = monthlyValue > 0 ? Math.max(0.1, programAnnualCost / monthlyValue) : Infinity;
    return {
      annualIncidentLoss,
      auditRemediationSpend,
      baselineExposure,
      avoidedLoss,
      programAnnualCost,
      netImpact,
      roiPercent,
      paybackMonths,
      monthlyValue,
    };
  }, [parsed]);

  const handleChange = (field: keyof typeof inputs) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleCopy = async () => {
    const summary = `MyITGuard ROI Snapshot:\n- Incidents/year: ${inputs.annualIncidents || 0}\n- Avg incident cost: ${currency(results.annualIncidentLoss / (parsed.annualIncidents || 1))}\n- Audit/compliance findings per year: ${inputs.auditFindings || 0}\n- Avg remediation per finding: ${currency(results.auditRemediationSpend / (parsed.auditFindings || 1 || 1))}\n- Expected reduction: ${inputs.reductionPercent || 0}%\n- Program cost: ${currency(results.programAnnualCost)} /yr\n- Avoided loss: ${currency(results.avoidedLoss)} /yr\n- Net impact: ${currency(results.netImpact)} /yr\n- Payback: ${results.paybackMonths === Infinity ? '—' : results.paybackMonths.toFixed(1) + ' months'} (est)`;
    try {
      await navigator.clipboard.writeText(summary);
    } catch (err) {
      /* no-op */
    }
  };

  return (
    <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-6 items-start">
      <div className="glass-card p-6 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-slate-800/60 flex items-center justify-center text-cyan-300">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">vCISO ROI Calculator</h3>
            <p className="text-slate-400 text-sm">Estimate avoided breach + remediation spend vs. program investment.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <NumberField
            label="Incidents per year"
            value={inputs.annualIncidents}
            onChange={handleChange("annualIncidents")}
          />
          <NumberField
            label="Avg. cost per incident (USD)"
            step={1000}
            value={inputs.avgIncidentCost}
            onChange={handleChange("avgIncidentCost")}
          />
          <NumberField
            label="Audit/compliance findings per year"
            value={inputs.auditFindings}
            onChange={handleChange("auditFindings")}
          />
          <NumberField
            label="Avg. remediation per finding (USD)"
            step={500}
            value={inputs.avgFindingCost}
            onChange={handleChange("avgFindingCost")}
          />
          <NumberField
            label="Expected reduction with MyITGuard (%)"
            min={0}
            max={95}
            step={1}
            value={inputs.reductionPercent}
            onChange={handleChange("reductionPercent")}
          />
          <NumberField
            label="Program monthly investment (USD)"
            step={500}
            value={inputs.programMonthlyCost}
            onChange={handleChange("programMonthlyCost")}
          />
        </div>

        <div className="flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-cyan-300 mt-0.5" />
          <p>
            Typical clients see 25-50% reduction in incident frequency and impact after vCISO-led controls, monitoring, and training. Adjust the reduction to match your risk appetite.
          </p>
        </div>
      </div>

      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Yearly impact</p>
            <h3 className="text-2xl font-bold text-white">ROI Snapshot</h3>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-cyan-400/30 text-cyan-200 text-sm hover:bg-cyan-500/10 transition"
          >
            <Copy className="w-4 h-4" /> Copy summary
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <Metric label="Incident loss" value={currency(results.annualIncidentLoss)} subtle />
          <Metric label="Audit remediation spend" value={currency(results.auditRemediationSpend)} subtle />
          <Metric label="Baseline exposure" value={currency(results.baselineExposure)} subtle />
          <Metric label="Avoided loss (est)" value={currency(results.avoidedLoss)} highlight />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <Metric label="Program cost" value={currency(results.programAnnualCost)} subtle />
          <Metric label="Net impact" value={`${results.netImpact >= 0 ? "+" : ""}${currency(results.netImpact)}`} highlight={results.netImpact >= 0} danger={results.netImpact < 0} />
          <Metric label="ROI" value={`${results.roiPercent.toFixed(0)}%`} highlight={results.roiPercent >= 0} danger={results.roiPercent < 0} />
          <Metric label="Payback (months)" value={results.paybackMonths === Infinity ? '—' : results.paybackMonths.toFixed(1)} subtle />
        </div>

        <div className="p-4 rounded-xl bg-slate-800/60 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: '#00ff88' }} />
          <p className="text-sm text-slate-200 leading-relaxed">
            This model includes avoided incident loss plus audit/compliance remediation spend. It does not capture upside from faster deals or brand protection—treat those as additional benefits.
          </p>
        </div>
      </div>
    </div>
  );
}

function NumberField({ label, value, onChange, min, max, step }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; min?: number; max?: number; step?: number }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-slate-300">{label}</label>
      <input
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        className="input-dark w-full"
        value={value}
        onChange={onChange}
        placeholder="0"
      />
    </div>
  );
}

function Metric({ label, value, highlight, danger, subtle }: { label: string; value: string; highlight?: boolean; danger?: boolean; subtle?: boolean }) {
  const color = danger ? '#f87171' : highlight ? '#22d3ee' : subtle ? '#cbd5e1' : '#e2e8f0';
  return (
    <div className="p-4 rounded-lg bg-slate-900/40 border border-white/5">
      <p className="text-xs uppercase tracking-wide" style={{ color: '#94a3b8' }}>{label}</p>
      <p className="text-lg font-semibold" style={{ color }}>{value}</p>
    </div>
  );
}
