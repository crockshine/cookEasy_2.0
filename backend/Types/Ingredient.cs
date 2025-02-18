using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Types
{
    public class Ingredient : BaseType
    {
        [Column("measure_unit")]
        [Required]
        public string MeasureUnit { get; set; }

        [Column("value")]
        [Required]
        public decimal Value { get; set; }
    }
}
