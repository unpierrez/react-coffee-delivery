import z from 'zod'

enum PaymentMethods {
    credit = 'credit',
    debit = 'debit',
    money = 'money',
  }
  
  export const confirmOrderFormValidationSchema = z.object({
    cep: z.string().min(1, 'Informe o CEP'),
    street: z.string().min(1, 'Informe a Rua'),
    number: z.string().min(1, 'Informe o número'),
    complement: z.string(),
    district: z.string().min(1, 'Informe o Bairro'),
    city: z.string().min(1, 'Informe a Cidade'),
    uf: z.string().min(1, 'Informe a UF').max(2, 'Só dois caracteres'),
    paymentMethod: z.nativeEnum(PaymentMethods, {
      errorMap: () => {
        return { message: 'Informe o método de pagamento' }
      },
    }),
  })

  export type OrderData = z.infer<typeof confirmOrderFormValidationSchema>