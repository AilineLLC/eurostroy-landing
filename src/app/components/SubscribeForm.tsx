'use client';

import { useState, useEffect } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

export function SubscribeForm() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log('SubscribeForm mounted as client component');
    }, []);

    async function handleSubmit() {
        console.log('handleSubmit called, email:', email);
        if (!email) {
            console.log('email is empty, returning');
            return;
        }
        setLoading(true);
        setError('');
        try {
            console.log('sending fetch...');
            const res = await fetch('/api/Marketing/EmailSubscription/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(email),
            });
            console.log('response status:', res.status);
            if (!res.ok) throw new Error(`status ${res.status}`);
            setSuccess(true);
            setEmail('');
        } catch (e) {
            console.error('fetch error:', e);
            setError('Ошибка. Попробуйте ещё раз.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-1">
            <h3 className="text-xl">Подпишитесь на нашу рассылку</h3>
            <div className="flex gap-2 relative">
                <Input
                    type="email"
                    placeholder="Введите email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setSuccess(false); }}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    className="flex-1 p-[20px] h-[60px] rounded-[15px] bg-white text-black pr-16"
                    disabled={loading}
                />
                <Button
                    type="button"
                    variant="default"
                    className="absolute right-0 rounded-[15px] w-[60px] h-[60px]"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? <Loader2 className="animate-spin" /> : success ? <CheckCircle /> : <ArrowRight />}
                </Button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">Вы успешно подписались!</p>}
        </div>
    );
}
